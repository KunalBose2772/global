/**
 * Fetches the Mega Menu data from our Custom Backend API.
 * This ensures all logic is handled server-side (in /api/menu).
 */
export async function getMegaMenuData() {
    try {
        const res = await fetch('/api/menu', {
            next: { revalidate: 60 } // Client-side fetch options or standard fetch
        });

        if (!res.ok) {
            console.warn('Backend API Error: Database likely missing tables. Returning null fallback.');
            return null;
        }

        const data = await res.json();

        if (data.empty || data.error) {
            return null; // Trigger fallback in UI
        }

        return data;

    } catch (error) {
        console.error("Client fetch error:", error);
        return null;
    }
}
