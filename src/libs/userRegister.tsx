
export default async function userRegister(userName:string,userTel:string, userEmail:string, userPassword:string) {


    const response = await fetch("https://dentist-backend-zeta.vercel.app/api/v1/auth/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            tel: userTel,
            email: userEmail,
            password: userPassword,
            role: "user"
        })
    })
    if(!response.ok){
        throw new Error("Failed to Sign-up");
    }

    return await response.json();
}