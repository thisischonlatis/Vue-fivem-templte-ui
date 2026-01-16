export async function SendHttp(name_event, data, resourceName = GetParentResourceName()) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data ?? {}),
    };

    try {
        const response = await fetch(`https://${resourceName}/${name_event}`, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        try {
            return JSON.parse(text);
        } catch {
            return text;
        }
    } catch (error) {
        console.error("Error occurred while sending HTTP request:", error);
        throw error;
    }
}
