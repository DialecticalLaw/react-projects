import { ValidationError } from 'yup';

export function getErrorMessage(errors: ValidationError[] | undefined, path: string): string | undefined {
  return errors ? errors.find((err) => err.path === path)?.message : undefined;
}
