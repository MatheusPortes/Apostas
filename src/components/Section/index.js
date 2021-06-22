import './style.css';

const Section = ({children})=>{
    return (
        <section className="init">
            {children}
        </section>
    );
}

export default Section;