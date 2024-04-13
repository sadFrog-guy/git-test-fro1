import React from 'react'
import Button from '../MyButton/Button'
import { useState, useEffect } from 'react';

export default function PWAInstall() {

    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            // Prevent the default browser behavior
            event.preventDefault();
            // Save the event for later use
            setDeferredPrompt(event);
            // Optionally, you can track this event for analytics purposes
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        // Display the install prompt
        if (deferredPrompt) {
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
                // Optionally, you can track this event for analytics purposes
                } else {
                console.log('User dismissed the install prompt');
                // Optionally, you can track this event for analytics purposes
                }
            });
        }
    };

  return (
    <Button onClick={handleInstallClick}>
        Установить
    </Button>
  )
}
