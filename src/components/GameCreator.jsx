export default function GameCreator(props) {
    const {children} = props;


    return (
        <div className='h-screen overflow-y-scroll text-white'>
            {children}
        </div>
    );
}
