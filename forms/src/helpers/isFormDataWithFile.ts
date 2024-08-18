import { FormDataWith } from '../components/Controlled/Controlled';

export function isFormDataWithFile(obj: object): obj is FormDataWith<FileList | string> {
  if (
    'name' in obj &&
    'age' in obj &&
    'email' in obj &&
    'password' in obj &&
    'repeat_password' in obj &&
    'gender' in obj &&
    'country' in obj &&
    'picture' in obj &&
    obj.picture instanceof FileList &&
    'isAgree' in obj
  )
    return true;
  return false;
}
