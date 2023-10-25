
const PostCard = () => (
    <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
            <div className="card-title">
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span>MX</span>
                    </div>
                </div>
            </div>
            <br/>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <br/>
            <div>
                <div className="avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-8">
                        <img src="https://api.lorem.space/image/face?hash=4818" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-8">
                        <img src="https://api.lorem.space/image/face?hash=40311" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-8">
                        <img src="https://api.lorem.space/image/face?hash=84348" />
                        </div>
                    </div>
                    <div className="avatar placeholder">
                        <div className="w-8 bg-neutral-focus text-neutral-content">
                        <span>+99</span>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="card-actions justify-between">
                <button className="btn">Like</button>
                <button className="btn">Comment</button>
                <button className="btn">Share</button>
            </div>
        </div>
    </div> 
)

export default PostCard;