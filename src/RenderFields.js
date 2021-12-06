import {
    TextField,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
  } from "@mui/material";
  
  const Dropdown = ({
    name,
    fieldProps,
    options,
    error,
    id = name.replace(/\W/g, "")
  }) => (
    <FormControl fullWidth error={!!error}>
      <InputLabel id={id}>{name}</InputLabel>
      <Select labelId={id} {...fieldProps}>
        {options.map((o) => (
          <MenuItem key={o} value={o}>
            {o}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
  
  const renderField = ({ name, props, options, showWhen }, state, setState) => {
    if (showWhen && !showWhen(state)) return null;
  
    const fieldProps = {
      label: name,
      value: state[name] ?? "",
      onChange: (e) =>
        setState((s) => ({
          ...s,
          [name]: e.target.value,
          [name + "Error"]: undefined
        }))
    };
  
    const error = state[name + "Error"];
  
    return (
      <Box key={name} p={1}>
        {options ? (
          <Dropdown {...{ name, fieldProps, options, error }} />
        ) : (
          <TextField
            fullWidth
            error={!!error}
            helperText={error}
            {...fieldProps}
            {...props}
          />
        )}
      </Box>
    );
  };
  
  export const RenderFields = ({ fields, state, setState }) =>
    fields.map((f) => renderField(f, state, setState));
  