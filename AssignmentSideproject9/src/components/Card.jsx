
function Card({user}){
    return(
       <section style={{
        width:"200px",
        height: "200px",
        border: "1px solid lightgreen",
        borderRadius: "20px",
        padding: "20px",
        margin: "10px",
        transition: "background 1s, color 1s",
        
        color: "black",
    }
    }
    onMouseOver={(c)=>{
        c.currentTarget.style.backgroundColor='lightgreen';
        c.currentTarget.style.color='black';
    }
}
    onMouseOut={(d)=>{
        d.currentTarget.style.backgroundColor='black';
        d.currentTarget.style.border='1px solid lightgreen';
        d.currentTarget.style.color='white';
    }
}
>
        <p>{user.Name}</p>
        <p>{user.Job}</p>
        <p>{user.Hobby}</p>

       </section> 
    )
}
export default Card