function RecommendationSection(props){
    return(
        <div>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-left" style={{"width":"2","height":"10"}}>
            {
                props.content.map(
                function(element){
                    return(
                        <div>
                        <li >
                        <img src={element.image} style={{"width":"200px","height":"200px"}}></img>
                        <br/>
                        <a href={element.url} target="_blank" >Watch Trailer</a>
                        <br/>
                    </li>
                    <br/>
                    </div>
                    
                    )
                })
            }
        </ul>
        </div>
    );
}
export default RecommendationSection;