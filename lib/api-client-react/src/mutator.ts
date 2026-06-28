export type ApiError = {
  message: string;
  code?: string;
};

export async function customClient<T>(
  config: {
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    headers?: Record<string, string>;
    data?: unknown;
    signal?: AbortSignal;
  },
): Promise<T> {
  const response = await fetch(config.url, {
    method: config.method,
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
    body: config.data ? JSON.stringify(config.data) : undefined,
    signal: config.signal,
  });

  if (!response.ok) {
    let errorBody: ApiError;
    try {
      const body = await response.json();
      errorBody = body?.error ?? { message: response.statusText };
    } catch {
      errorBody = { message: response.statusText };
    }
    throw errorBody;
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}
