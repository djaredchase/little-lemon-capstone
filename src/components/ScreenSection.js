export const ScreenSection = ({ children, backgroundColor }) => {
    const flexStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    // 1920 or 1440 for max-width
    return (
        <section style={{ backgroundColor, ...flexStyles }}>
            <div style={{ maxWidth: '1440px', minHeight: '50vh', ...flexStyles }}>
                {children}
            </div>
        </section>
    )
}