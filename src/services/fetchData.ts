// Utility function for making fetch requests
export const fetchData = async <T>(url: string): Promise<T> => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "An unexpected error occurred");
    }
};
