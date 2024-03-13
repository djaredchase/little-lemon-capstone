export const ScreenSection = ({ children, backgroundColor }) => {
    const flexStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <section style={{ backgroundColor, ...flexStyles }}>
            <div style={{ maxWidth: '1920px', minHeight: '50vh', ...flexStyles }}>
                {children}
            </div>
        </section>
    )
}