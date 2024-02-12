export interface UserDataFromApi {
  access_token: string;
}

export class FetchDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FetchDataError";
  }
}

export enum MethodType{
   GET = 'GET',
   POST = 'POST',
   PATCH = 'PATCH',
   PUT = 'PUT',
   DELETE = 'DELETE'
}
 
export const fetchDataFromApi = async (
  url: string,
  user: UserDataFromApi,
  methodType: MethodType,
  body: unknown | null,
  errorMsg: string
) => {
  try {
    const headers = {
      Authorization: `Bearer ${user.access_token}`,
      "Content-Type": "application/json",
    };
 
    const options = {
      method: methodType,
      headers,
      body: body ? JSON.stringify(body) : null,
    };
 
    const response = await fetch(url, options);
 
    if (!response.ok) {
      const errorData = await response.json();
      throw new FetchDataError(`${errorMsg}: ${errorData.message}`);
    }
 
    const data = await response.json();
 
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};