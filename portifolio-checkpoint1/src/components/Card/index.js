

const Card = ({img,titulo,desc,ref1,ref2}) => {
    return(
    <div class="col-lg card shadow card-pro">
        <div class="card-img-holder">
            <img class="img-card" src={img} alt={"imagem do card 1"}></img>
        </div>
        <div class="card-holder py-3 px-3">
            <div class="card-txt-holder">
                <h5>{titulo}</h5>
                <p>{desc}</p>
            </div>
            <div class="card-button-holder">
                <a class="btn btn-primary btn-override" href={ref1}>Visite</a>
                <a class="btn btn-secondary btn-override" href={ref2}>GitHub</a>
            </div>
        </div>
    </div>
    )
}

export default Card;