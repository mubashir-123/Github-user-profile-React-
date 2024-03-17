import axios from "axios"
import { useRef, useState } from "react";

const App = () => {
  const [Data, setData] = useState(0);
  const username = useRef();

  const github = (e) => {
    e.preventDefault();
    axios(`https://api.github.com/users/${username.current.value}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <img src="/github logo.png" className="w-40"/>

      <form className="flex flex-wrap justify-center items-center" onSubmit={github}>
        <label className="form-control w-full max-w-xs flex flex-row gap-1">

          <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" ref={username} />

          <button type="onSubmit" className="btn btn-neutral flex flex-col p-1 px-4">Enter</button>
        </label>
      </form>

      <div>
        <div>{Data &&
          (<>
           <div className="flex flex-wrap justify-center mt-5">
            <div className="card card-side bg-base-100 shadow-xl w-4/5">
              <figure><img src={Data.avatar_url} /></figure>
              <div className="card-body">
                <div>Login: {Data.login}</div>
                <div>User ID: {Data.id}</div>
                <div>Name: {Data.name}</div>
                <div>Created At: {Data.created_at}</div>
                <div>Profile URL: {Data.organizations_url}</div>
                <div>Followers: {Data.followers}</div>
                <div>Following: {Data.following}</div>
                <div>Public Repository: {Data.public_repos}</div>
                <div>Type: {Data.type}</div>
                <div>Updated: {Data.updated_at}</div>
              </div>
            </div>
          </div>
          </>)}
        </div>
      </div>

    </>
  )
}

export default App