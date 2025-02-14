
import { StreamChat} from "stream-chat"
import { clerkClient } from '@clerk/nextjs/server'
const api_key = "nfxa5rw3rwqf";
const api_secret = "kw5ugkxnwf8aj36rkcwra2fjbgadkd82s5zykfnczpuyvdhyrh92aq6pqftd5wfn";
// const user_id = "user_2sznpSzpb48mU7aFfvNDCDAzl0H";

export async function POST(request) {
    // Initialize a Server Client
const serverClient = StreamChat.getInstance(api_key, api_secret);
const user = await request.json()

function Captalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// // Create User Token
const token = serverClient.createToken(user.data.id);
console.log("A NEW USER HAS BEEN CREATED" , token)
const client = await clerkClient()
await serverClient.upsertUser({id: user.data.id})



await client.users.updateUserMetadata(user.data.id, {
  publicMetadata: {
    token: token
  },
})

//give access to all user of chats
const slugs = [
    "Python-new",
    "JavaScript-new",
    "DataScience-new",
    "Web-Dev-new",
    "Cloud-Computing-new",
    "Mobile-Dev-new"
  ]
  slugs.forEach(async (item) => {
    const channel = serverClient.channel('messaging', item , {
        image: 'https://getstream.io/random_png/?name=react',
        name: Captalize(item) + "Discussions",
        created_by_id: user.data.id
      });
      await channel.create()
      channel.addMembers([user.data.id])
  })
    return Response.json({ message: 'Hello World' })
  }