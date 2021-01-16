function RepoDetails({details,loading}){
    if(loading){
        return (
            <h1 className="loader">loading ..</h1>
        )
    
    }
return (
    <div className="repo-details">
        <div className="details-row">
            <label className="label">Name:</label>
            <span className="value">{details.name}</span>
        </div>
        <div className="details-row">

        <div className="label">Forks:</div>
        <span className="value">{details.fork}</span>
        </div>
        <div className="details-row">

        <div className="label">Language Used:</div>
        <span className="value">{details.fork}</span>
        </div>
        <div className="details-row">
            <div className="label">Stars</div>
            <span className="value">{details.stargazers_count}</span>
    </div>
    </div>
    
    )
}
export default RepoDetails;