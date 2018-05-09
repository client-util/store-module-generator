// CONSTANT key
// CONSTANT NAME
export default (moduleGenertor = (CONSTANT, CKEY) => {
  const module = {
    mutations: new Mutation({
      CONSTANT,
      CKEY
    })
  };
});
