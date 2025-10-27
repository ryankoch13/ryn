import { Tables } from "./database.types";

export type Channel = Tables<'channels'>
export type User = Tables<'users'>

export type ChannelWithUsers = Channel & {users: User[]}
  
  export type Message = Tables<'messages'>;
  