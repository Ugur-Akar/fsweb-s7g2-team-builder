


function Member(props){
    const {name, email, role, age} = props.member;
    return (
        <p>{name} {email} {role} {age} </p>
    )
}

export default Member;