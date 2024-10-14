export const getModalStyles = isVisible => ({
  container: {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    visibility: isVisible ? 'visible' : 'hidden',
    transition: 'visibility .3s, transform .3s, opacity .3s'
  },
  modal: {
    pointerEvents: isVisible ? 'all' : 'none'
  }
});
