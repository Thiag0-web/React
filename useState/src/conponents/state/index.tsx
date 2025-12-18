export default function Profile() {
let followButtonText = "Follow"

function handleClick(ev: any) {
    alert("Você agora está seguindo!")
    followButtonText = "Following"
    console.log({ followButtonText })
  }

export function State(){

  return (
    <div >
      <img />
      <title>
        <span></span>
        <button
          onClick={handleClick}
        >
          {followButtonText}
        </button>
      </title>
      </div>
)}