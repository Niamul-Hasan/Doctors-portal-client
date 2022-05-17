import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const curentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    'context-type': "application/json"
                },
                body: JSON.stringify(curentUser)
            }).then(res => res.json()).then(data => {
                console.log("inside useToken", data);
            })
        }
    }, [user])
    return [token];
}
export default useToken;