export const ScreenSection = ({ children, backgroundColor, marginBottom }) => {
    const styles = {
        maxWidth: '1440px',
        marginInline: 'auto',
        padding: '0 2rem'
    }

    // 1920 or 1440 for max-width
    return (
        <section style={{ backgroundColor, marginBottom: marginBottom || 0 }}>
            <div style={styles}>
                {children}
            </div>
        </section>
    )
}