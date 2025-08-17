import {onCLS, onINP, onLCP} from 'web-vitals';

export  function sendToAnalytics(metric) {
    const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        id: metric.id,

        // Include additional data as needed...
    });

    // Use `navigator.sendBeacon()` to send the data, which supports
    // sending while the page is unloading.
    navigator.sendBeacon('/analytics', body);
}

