'use client';

interface HeadingProps {
    title: string,
    center?: boolean
}

const Heading: React.FC<HeadingProps> = ({title, center}) => {
    return ( 
        <div className={`heading ${center? 'text--center': 'text--start'}`}>
            <h2 className="heading__title">{title}</h2>
        </div> 
    );
}
 
export default Heading;