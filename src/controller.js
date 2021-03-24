async function base(ctx) {
  await ctx.render('base');
}

async function signIn(ctx) {
  await ctx.render('signIn');
}

async function testIndex(ctx) {
  await ctx.render('testIndex');
}

async function index(ctx) {
  await ctx.render('index');
}


module.exports = {
  base,
  signIn,
  testIndex,
  index,
};