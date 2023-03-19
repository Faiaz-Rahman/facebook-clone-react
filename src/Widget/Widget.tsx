import './Widget.css'

const Widget: React.FC = () => {
    return (
        <div className="widget">
            <iframe
                src="http://web.simmons.edu/~grovesd/comm244/notes/week2/links"
                width={340}
                height={'100%'}
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="yes"
                allowTransparency={true}
                allow="encrypted-media"></iframe>
        </div>
    )
}

export { Widget }
