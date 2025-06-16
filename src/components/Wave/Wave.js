import './Wave.css'; // Importamos el archivo CSS

const Wave = ({wave}) => {
    return(
        <div className="waves" >
            <div className="waves__container">
                <img src={wave} className="waves__wave" alt="wave" />
                <img src={wave} className="waves__wave" alt="wave" />
                <img src={wave} className="waves__wave" alt="wave" />
            </div>
        </div>
    );
}
export default Wave;