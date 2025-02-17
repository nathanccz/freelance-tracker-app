export default function Card({ data }) {
    return (
        <div className="card bg-base-200 w-84 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{data['business-name']}</h2>
                <p>{data['business-type']}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}