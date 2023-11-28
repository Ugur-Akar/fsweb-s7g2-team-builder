import Member from "./Member"

function MemberList(props) {
    const memberList = props.memberList;

    const clickHandler = (e) => {
        
    }
    
    return (<div className = "memberList">
        {memberList.map(member => (
        <Member member = {member} />
      ))}
    </div>)
}

export default MemberList;