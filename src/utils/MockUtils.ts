import { IUser } from "../resources/model";

const mockUser: IUser = {
  id: "55be3c8fc964860700ebf515",
  info: {
    age: 20,
    type: "Single",
    gender: "Male",
    sexuality: "Straight",
    name: "Nick",
    about: `Lorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.\n\nLorem ipsum dolor sit amet. conse adipisicing elit.Phasellus egestas viverra efficitur.\n\nMorbi diam elit, ullamcorper a nunc.\n\nLorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.`,
    desires: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"],
    interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
  },
  associated: {
    id: "55be3c8fc964860700ebf515",
    photos: [
      {
        url: "https://www.placecage.com/100/100",
        width: 100,
        height: 100
      }
    ]
  } as IUser,
  photos: [
    {
      url: "https://www.placecage.com/600/600",
      width: 600,
      height: 600
    },
    {
      url: "https://www.placecage.com/510/420",
      width: 510,
      height: 420
    },
    {
      url: "https://www.placecage.com/255/400",
      width: 255,
      height: 400
    }
  ]
};

export default { mockUser };
