import { map } from "./utils";
import XLSX from "xlsx";

const spreadSheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8iE5hkwY6i8ikmnosyDuuB4Oy1vOUaUoAYjgNo-UjiDn-SBB87MULu1ONczsDeC1PUsGFUiugz5gJ/pub?output=xlsx";

const formatters = {
  dollars: (val) => "$" + Number(val).toLocaleString(),
};

export const loadState = async () => {
  const resp = await fetch(location.hash.slice(1) || spreadSheetUrl);
  const data = map(
    XLSX.utils.sheet_to_json,
    XLSX.read(await resp.arrayBuffer()).Sheets
  );

  const fields = {};
  for (const f of data.fields) {
    const obj = {
      label: f.label,
      type: f.type,
      columns: Number(f.columns) || 0,
      update: f.update && new Function("fields", f.update),
      fields: {},
      ...(f.options ? new Function("data", f.options)(data) : {}),
    };
    obj.formatter = formatters[obj.format] || ((x) => x);
    if (f.parentField) fields[f.parentField].fields[f.key] = obj;
    else fields[f.key] = obj;
  }

  return {
    ...Object.fromEntries(data.config.map((r) => [r.key, r.value])),
    fields,
  };
};
