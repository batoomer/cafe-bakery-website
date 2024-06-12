import './globalStyle.css';
import Navigation from './Navigation';

new Navigation();

// Add an event listener for when the page has finished loading
window.addEventListener('beforeunload', () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});