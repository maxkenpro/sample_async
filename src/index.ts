function main1() {
	console.log('重い処理の呼び出しを受けました、処理を始めます')
	sub1()
	console.log('先に続きの処理を始めます')
	sub2()
}

//軽い処理を呼び出す関数
function sub2 () {
	for(let i = 10; i < 20; i++ ) {
		console.log(i)
	}
}

//重い処理を呼び出す関数
async function sub1 () {
	const result = await resolveAfter2Seconds();
	console.log(result)
	for (let i = 0; i < 10; i++ ) {
		console.log(i)
	}
}

//重い処理 2秒かけてpromiseをリターンする
function resolveAfter2Seconds() {
	// return Promise
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('重い処理がおわりました');
    }, 2000);
  });
}


main1()

//promise all ////////////////////////////////////////////////////////////////

//重い処理を呼び出す関数
const processALL = async function allStart () {
	await A()
	await Promise.all([C(), B()])
	console.log('全部終わり')
	// await B()
	// await C()
}

//重い処理 2秒かけてpromiseをリターンする
const A = function resolveAfter1Seconds() {
	// return Promise
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
			console.log('重い処理がおわりましたA');
			resolve()
    }, 1000);
  });
}

const B = function resolveAfter3Seconds() {
	// return Promise
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log('重い処理がおわりましたB');
			resolve()
    }, 3000);
  });
}

const C = function resolveAfter5Seconds() {
	// return Promise
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      console.log('重い処理がおわりましたC');
			resolve()
    }, 5000);
  });
}


processALL()

