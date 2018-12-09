import { IUser } from "../resources/model";

const mockUsers: IUser[] = [
  {
    id: "1",
    localId: "",
    info: {
      age: 40,
      type: "Single",
      gender: "Male",
      sexuality: "Straight",
      name: "Nick",
      about: `Lorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.\n\nLorem ipsum dolor sit amet. conse adipisicing elit.Phasellus egestas viverra efficitur.\n\nMorbi diam elit, ullamcorper a nunc.\n\nLorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.`,
      desires: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"],
      interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
    },
    associated: {
      age: 20,
      gender: "male",
      sexuality: "straight",
      name: "Mike"
    },
    photos: [
      { url: "https://www.placecage.com/600/600", width: 600, height: 600 },
      { url: "https://www.placecage.com/700/600", width: 700, height: 600 },
      { url: "https://www.placecage.com/550/650", width: 550, height: 650 }
    ]
  },
  {
    id: "2",
    localId: "",
    info: {
      age: 26,
      type: "Single",
      gender: "Male",
      sexuality: "Straight",
      name: "Nicholas",
      about: `Lorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.\n\nLorem ipsum dolor sit amet. conse adipisicing elit.Phasellus egestas viverra efficitur.\n\nMorbi diam elit, ullamcorper a nunc.\n\nLorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.`,
      desires: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"],
      interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
    },
    associated: {
      age: 22,
      gender: "male",
      sexuality: "straight",
      name: "Mike"
    },
    photos: [
      { url: "https://www.placecage.com/600/700", width: 600, height: 700 },
      { url: "https://www.placecage.com/700/700", width: 700, height: 700 },
      { url: "https://www.placecage.com/550/550", width: 550, height: 550 }
    ]
  },
  {
    id: "3",
    localId: "",
    info: {
      age: 40,
      type: "Single",
      gender: "Male",
      sexuality: "Straight",
      name: "Nickey",
      about: `Lorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.\n\nLorem ipsum dolor sit amet. conse adipisicing elit.Phasellus egestas viverra efficitur.\n\nMorbi diam elit, ullamcorper a nunc.\n\nLorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.`,
      desires: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"],
      interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
    },
    associated: {
      age: 23,
      gender: "male",
      sexuality: "straight",
      name: "Mike"
    },
    photos: [
      { url: "https://www.placecage.com/220/150", width: 220, height: 150 },
      { url: "https://www.placecage.com/340/180", width: 340, height: 180 }
    ]
  },
  {
    id: "4",
    localId: "",
    info: {
      age: 26,
      type: "Single",
      gender: "Male",
      sexuality: "Straight",
      name: "Nicha",
      about: `Lorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.\n\nLorem ipsum dolor sit amet. conse adipisicing elit.Phasellus egestas viverra efficitur.\n\nMorbi diam elit, ullamcorper a nunc.\n\nLorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.`,
      desires: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"],
      interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
    },
    associated: {
      age: 33,
      gender: "male",
      sexuality: "straight",
      name: "Mike"
    },
    photos: [
      { url: "https://www.placecage.com/512/700", width: 512, height: 700 },
      { url: "https://www.placecage.com/900/700", width: 900, height: 700 },
      { url: "https://www.placecage.com/550/900", width: 550, height: 900 }
    ]
  },
  {
    id: "5",
    localId: "",
    info: {
      age: 40,
      type: "Single",
      gender: "Male",
      sexuality: "Straight",
      name: "Nicko",
      about: `Lorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.\n\nLorem ipsum dolor sit amet. conse adipisicing elit.Phasellus egestas viverra efficitur.\n\nMorbi diam elit, ullamcorper a nunc.\n\nLorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.`,
      desires: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"],
      interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
    },
    associated: {
      age: 23,
      gender: "male",
      sexuality: "straight",
      name: "Mike"
    },
    photos: [
      { url: "https://www.placecage.com/630/740", width: 630, height: 740 },
      { url: "https://www.placecage.com/123/234", width: 123, height: 234 }
    ]
  },
  {
    id: "6",
    localId: "",
    info: {
      age: 26,
      type: "Single",
      gender: "Male",
      sexuality: "Straight",
      name: "Nocke",
      about: `Lorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.\n\nLorem ipsum dolor sit amet. conse adipisicing elit.Phasellus egestas viverra efficitur.\n\nMorbi diam elit, ullamcorper a nunc.\n\nLorem ipsum dolor sit amet, conse adipisicing elit.Phasellus egestas viverra efficitur. Proin eu suscipit magna.Morbi diam elit, ullamcorper a nunc ut, elementum imperdiet lectus.`,
      desires: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"],
      interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
    },
    associated: {
      age: 19,
      gender: "male",
      sexuality: "straight",
      name: "Mike"
    },
    photos: [
      { url: "https://www.placecage.com/400/700", width: 400, height: 700 },
      { url: "https://www.placecage.com/800/800", width: 800, height: 800 },
      { url: "https://www.placecage.com/800/550", width: 800, height: 550 }
    ]
  }
];

const mockUser = mockUsers[0];

const mockAssociated = {
  age: 19,
  gender: "male",
  sexuality: "straight",
  name: "Mike"
};

export default { mockUser, mockUsers, mockAssociated };
