export async function apiFetch<T = any>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://fakestoreapi.com';

  if (!endpoint.startsWith('/')) {
    endpoint = `/${endpoint}`;
  }

  const url = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    return (await res.json()) as T;
  } catch (err) {
    const error = err instanceof Error ? err : new Error('Unknown error');
    console.error('API Error:', error.message);
    throw error;
  }
}
