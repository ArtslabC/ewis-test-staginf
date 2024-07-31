import { useController } from "react-hook-form";

const FormField = ({ control, name, render }) => {
  const { field, fieldState, formState } = useController({
    name,
    control,
  });

  return render({ field, fieldState, formState });
};

export default FormField;
