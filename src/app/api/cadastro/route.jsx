import { NextResponse } from "next/server"


export async function POST(request, response){

    const {numSerie, cor, modelo, valor} = request.json()

    const body = {
        "numSerie": numSerie,
        "cor": cor,
        "modelo": modelo,
        "valor": valor
    }

    try {
        const response = await fetch("http://localhost:3000/bike",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(body)
            })

            if(response.status == "200"){
                return NextResponse.json({"status": true})
            }else{
                return NextResponse.json({"status": false})
            }

    } catch (error) {
        return NextResponse.error()
    }

}