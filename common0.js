/* eslint-disable no-console */

import  translation from '@/translation'
import { toChecksumAddress, fromWei,toWei, isAddress, hexToNumberString } from 'web3-utils'

import XLSX from 'xlsx';

const state = () => {
  return {
    step: 1,
    language:'EN',
    headerClosed:false,
    translationWord:{},
    inputType:0,
    addressesInsertWay:0,
    code:'',
    estimateETHCost: 0,
    etherEnough: true,
    queryLimit: 1000,
    maxTestingCount:5,
    estimateCostPerTransferOfFresher: 40000,
    estimateCostPerTransferOfHolder: 25000,
    sendLoading: false,
    sendingIndex: 0,
    unFinishedTxs: {},
    currentRouter: null,
    checkingAddressFrom: 0,
    checkingAddressTo: 1000,
    contructTxIndex: 0,
    isMobile: false,

    addressInfo:{
      taskID:'',
      nonAmount:0,
      validAmount:0,
      nonDuplicatedAmount:0,
      originalData:[],
      originalAddressStr:[],
      duplicatedAddresses:[],
      duplicatedAddressesIndexes:[],
      invalidAddresses:[],
      invalidAddressesIndexes:[],
      validData:[],
      combinedData:[],
      nonDuplicatedData:[],
      finalData:[],
      finalAmount:0,
      batches:[],
      times:1,
      batchSize: 100,
      holders:[],
      freshers:[],
      estimateGasUsed:0
    },
  }
}

const getters = {
  step(state) {
    return state.step;
  },
  headerClosed(state) {
    return state.headerClosed;
  },
  language(state) {
    return state.language;
  },
  translationWord(state) {
    return translation[state.language]
  },
  addressInfo(state) {
    return state.addressInfo
  },
}

const mutations = {
  SET_STEP(state, step) {
    state.step = step;
  },
  SET_INPUT_TYPE(state, type) {
    state.inputType = type;
  },
  SET_CODE(state, code) {
    state.code = code;
  },

  SET_HEADER_CLOSED(state, closed) {
    state.headerClosed = closed;
  },
  SET_LANGUAGE(state, language) {
    state.language = language;
  },
  SET_ORIGIN_INPUT_DATA(state, inputData) {
    state.originInputData = inputData;
  }
  ,
  SET_ADDRESS_INFO(state, addressInfo) {
    state.addressInfo = addressInfo;
  }
  ,
  SET_ESTIMATED_COST_PER_TRANSFER_OF_FRESHER(state, estimateCostPerTransferOfFresher) {
    state.estimateCostPerTransferOfFresher = estimateCostPerTransferOfFresher
  },
  SET_ESTIMATED_COST_PER_TRANSFER_OF_HOLDER(state, estimateCostPerTransferOfHolder) {
    state.estimateCostPerTransferOfHolder = estimateCostPerTransferOfHolder
  },
  SET_SEND_LOADING(state, loading) {
    state.sendLoading = loading;
  },
  SET_ESTIMATED_ETH_COST(state, estimateETHCost) {
    state.estimateETHCost = estimateETHCost;
  },

  SET_ETHER_ENOUGH(state, etherEnough) {
    state.etherEnough = etherEnough;
  },

  SET_ADDRESSES_INSERT_WAY(state, addressesInsertWay) {
    state.addressesInsertWay = addressesInsertWay;
  },

  SET_SENDING_INDEX(state, sendingIndex) {
    state.sendingIndex = sendingIndex;
  },

  SET_UNFINISHED_TXS(state, txs) {
    state.unFinishedTxs = txs
  },

  SET_CURRENT_ROUTER(state, currentRouter) {
    state.currentRouter = currentRouter
  },
  SET_IS_MOBILE(state, isMobile) {
    state.isMobile = isMobile
  },
  SET_CONTRUCT_INDEX(state, contructTxIndex){
    state.contructTxIndex = contructTxIndex
  },

  SET_CHECKING_ADDRESS_FROM(state, checkingFrom){
    state.checkingAddressFrom = checkingFrom
  },
  SET_CHECKING_ADDRESS_TO(state, checkingTo){
    state.checkingAddressTo = checkingTo
  },

}

const actions = {
  updateContructIndex({ dispatch, commit }, { contructTxIndex }){
    commit("SET_CONTRUCT_INDEX", contructTxIndex)
  },

  updateCheckingFrom({ dispatch, commit }, { checkingFrom }){
    commit("SET_CHECKING_ADDRESS_FROM", checkingFrom)
  },
  updateCheckingTo({ dispatch, commit }, { checkingTo }){
    commit("SET_CHECKING_ADDRESS_TO", checkingTo)
  },

  updateIsMobile({ dispatch, commit }, { isMobile }){
    commit("SET_IS_MOBILE", isMobile)
  },
  updateIsMobile({ dispatch, commit }, { isMobile }){
    commit("SET_IS_MOBILE", isMobile)
  },
  updateIsMobile({ dispatch, commit }, { isMobile }){
    commit("SET_IS_MOBILE", isMobile)
  },
  updateStep({ dispatch, commit }, { step }){
    commit("SET_STEP", step)
  },

  setSendLoading({ dispatch, commit }, { loading }){
    commit("SET_SEND_LOADING", loading)
  },

  setSendingIndex({ dispatch, commit }, { sendingIndex }){
    commit("SET_SENDING_INDEX", sendingIndex)
  },
  setCode({ dispatch, commit }, { code }){
    commit("SET_CODE", code)
  },

  setInputType({ dispatch, commit }, { type }){
    commit("SET_INPUT_TYPE", type)
  },

  setHeaderClosed({ dispatch, commit }, {closed }){
    commit("SET_HEADER_CLOSED", closed)
  },

  updateLanguage({ dispatch, commit }, { language }){
    commit("SET_LANGUAGE", language)
  },
  updateLanguage({ dispatch, commit }, { language }){
    commit("SET_LANGUAGE", language)
  },

  updateLanguage({ dispatch, commit }, { language }){
    //
    try{
        commit("SET_LANGUAGE", language)
        localStorage.language = language
    }catch(e){}
  },

  async saveAddressesInsertWay({ rootState, rootGetters, dispatch, commit,state},{addressesInsertWay}) {
    try{
        commit('SET_ADDRESSES_INSERT_WAY', addressesInsertWay)
        localStorage.addressesInsertWay = addressesInsertWay
    }catch(e){}
  },

  async getCachedLanguage({ rootState, rootGetters, dispatch, commit,state}) {
    let language = undefined
    try{
        language = localStorage.language
    }catch(e){}
    return language
  },

  async getAddressesInsertWay({ rootState, rootGetters, dispatch, commit,state}) {
    let addressesInsertWay = 0
    try{
        addressesInsertWay = localStorage.addressesInsertWay
    }catch(e){}
    return addressesInsertWay
  },

  async syncUserLastUsedLocalCaches({ rootState, rootGetters, dispatch, commit,state}) {
    let addressesInsertWay = await dispatch('getAddressesInsertWay')
    commit('SET_ADDRESSES_INSERT_WAY', addressesInsertWay)

  },

  async initBulksender({ rootState, rootGetters, dispatch, commit,state}) {
    // etherEnough: true,
    // queryLimit: 1000,
    // maxTestingCount:5,
    // estimateCostPerTransferOfFresher: 40000,
    // estimateCostPerTransferOfHolder: 25000,
    // sendLoading: false,
    // sendingIndex: 0,

    // commit('SET_SEND_LOADING', false)
    // commit('SET_ADDRESS_INFO', {})

  },

  async updateCurrentRouter({ rootState, rootGetters, dispatch, commit,state}, {currentRouter}) {
      commit('SET_CURRENT_ROUTER', currentRouter)
  },
  async clearUsedParams({ rootState, rootGetters, dispatch, commit,state}) {
    dispatch('bulksender/clearUsedParams',{}, { root: true })
    dispatch('token/clearUsedParams',{}, { root: true })
    commit('SET_CHECKING_ADDRESS_FROM', 0)
    commit('SET_CHECKING_ADDRESS_TO', 1000)
    commit('SET_CONTRUCT_INDEX', 0)

  },
  async initBaseParams({ rootState, rootGetters, dispatch, commit,state}) {

  },

  async getNetIdStorage({ dispatch, rootState, commit, state }) {
    let netStorage = {}
    try{
      const {netId} = rootState.metamask
      let netStorageCache = localStorage.getItem("netId" + netId)
      if(netStorageCache != null && netStorageCache != undefined) {
        netStorage = JSON.parse(netStorageCache)
      }
    }catch(e){
    }
    return netStorage
  },

  async updateNetIdStorage({ dispatch, commit, rootState, state }, {netStorage}) {
    try{
      const {netId} = rootState.metamask
      localStorage.setItem(("netId" + netId), JSON.stringify(netStorage))
    }catch(e){
      console.info(e)
    }
  },

  async estimateTotalEtherCost({ rootState, rootGetters, dispatch, commit,state}) {
    const {tokenSelected} = rootState.token
    const {gasPrice} = rootState.bulksender
    const txFee = await rootGetters['bulksender/txFee']
    let estimateEtherCost = 0
    // let gasUsedBN = web3.toBigNumber(toWei((state.addressInfo.totalGas * gasPrice).toString(), 'gwei'))
    let gasUsedBN = web3.toBigNumber(state.addressInfo.totalGas).times(web3.toBigNumber(gasPrice)).times(web3.toBigNumber(10).pow(1))

    let dappFeeBN = web3.toBigNumber(txFee * state.addressInfo.batches.length)
    let totalBN = gasUsedBN.plus(dappFeeBN)
    if(tokenSelected.isETH){
      let sendAmountBN = web3.toBigNumber(state.addressInfo.finalAmount).times(web3.toBigNumber(10).pow(6))
      totalBN = totalBN.plus(sendAmountBN)
    }
    let ether = totalBN.div(web3.toBigNumber(10).pow(6)).toNumber()
    commit("SET_ESTIMATED_ETH_COST", ether)

    dispatch('checkEtherEnough')

  },

  async checkEtherEnough({ rootState, rootGetters, dispatch, commit,state}) {
    const {balance} = rootState.metamask
    const estimateETHCost = state.estimateETHCost
    let etherEnough = web3.toBigNumber(balance).toNumber() >= web3.toBigNumber(estimateETHCost).toNumber()
    commit("SET_ETHER_ENOUGH", etherEnough)
    return etherEnough
  },
  async parseInsertAddresses({ rootState, dispatch, commit}, {insertedAddress}) {
    var addresses = insertedAddress.replace(/(\n[\s|\t]*\r*\n)/g, '\n').replace(/^\s+|\s+$/gm,'');
    addresses = addresses.split("\n");
    await dispatch('checkInsertAddresses',{addresses})
    return true

  },

  async updateBulkSentStatus({ rootState, dispatch, commit}, {status, txHash, uniqueId}) {
    const {addressInfo} = rootState.common
    let addressInfoCopy = Object.assign({},addressInfo)
    let batches = addressInfoCopy.batches
    let batchesCopy = Object.assign([],batches)
    batchesCopy.some((item, index)=>{
      let newItem = Object.assign({},item)
      if(item.uniqueId == uniqueId && newItem.status != 1){
        newItem.status = status,
        newItem.txHash = txHash
        batchesCopy.splice(index,1,newItem);
        return true
      }
    })
    addressInfoCopy.batches = batchesCopy
    commit("SET_ADDRESS_INFO", addressInfoCopy)

    dispatch('saveTxsToLocal',{status, txHash})

  },



  async prepareBulksending({ rootState, state, dispatch, commit}) {
    const {allowanceEnough, address} = rootState.token
    if(allowanceEnough){
      let tokenAddress = address
      const {addressInfo} = rootState.common
      const {maxGasUsed} = rootState.bulksender

      let addressInfoCopy = Object.assign({},addressInfo)
      let finalData = addressInfoCopy.finalData

      let queryLimit = state.queryLimit
      var queryTimes = parseInt(Math.ceil(finalData.length/parseFloat(state.queryLimit)));
      let holders = []
      let freshers = []
      // for(var index = 0;index< queryTimes;index++){
      //    var fromIndex = index * queryLimit
      //    var toIndex = queryLimit *(index+1)
      //    var queryData = finalData.slice(fromIndex, toIndex);
      //    var addresses = []
      //    queryData.forEach(item=>{
      //      addresses.push(item.address)
      //    });
      //
      //    commit("SET_CHECKING_ADDRESS_FROM", fromIndex)
      //    if(toIndex > finalData.length){
      //      let toIndex = finalData.length
      //      commit("SET_CHECKING_ADDRESS_TO", toIndex)
      //    }else{
      //      commit("SET_CHECKING_ADDRESS_TO", toIndex)
      //    }
      //
      //    console.info('Query balance', fromIndex, toIndex);
      //    let result = await dispatch('token/bulkQueryBalances',{tokenAddress,addresses }, { root: true })
      //    result.forEach((balance,index)=>{
      //      var item = queryData[index]
      //      item.balance = balance
      //      if(balance > 0){
      //        holders.push(item)
      //      }else{
      //        freshers.push(item)
      //      }
      //    })
      // }

      freshers = finalData
      console.info("Holders",holders.length);
      console.info("Freshers",freshers.length);

      let estimateCostPerTransferOfHolder = 0
      let estimateCostPerTransferOfFresher = 270000

      // let testAddresses = []
      // let testBalances = []

      // holders.some((item, index)=>{
      //   if(index == state.maxTestingCount){
      //     return true
      //   }
      //   testAddresses.push(item.address)
      //   testBalances.push(item.amount)
      // })
      //
      //
      // let estimateCostPerTransferOfHolder = 0
      // if(testAddresses.length && testBalances.length){
      //   estimateCostPerTransferOfHolder = await dispatch('bulksender/estimateGasForPerTransferUsedBulksender',{tokenAddress,testAddresses, testBalances}, { root: true })
      //   console.info('estimateCostPerTransferOfHolder',estimateCostPerTransferOfHolder)
      // }
      // if(estimateCostPerTransferOfHolder == -1){
      //   throw Error('estimateCostPerTransferOfHolder error')
      // }
      //
      // testAddresses = []
      // testBalances = []
      // freshers.some((item, index)=>{
      //   if(index == state.maxTestingCount){
      //     return true
      //   }
      //   testAddresses.push(item.address)
      //   testBalances.push(item.amount)
      // })
      //
      // let estimateCostPerTransferOfFresher = 0
      // if(testAddresses.length && testBalances.length){
      //   estimateCostPerTransferOfFresher = await dispatch('bulksender/estimateGasForPerTransferUsedBulksender',{tokenAddress,testAddresses, testBalances}, { root: true })
      //   console.info('estimateCostPerTransferOfFresher',estimateCostPerTransferOfFresher)
      // }
      // if(estimateCostPerTransferOfFresher == -1){
      //   throw Error('estimateCostPerTransferOfFresher error')
      // }

      //不处理，holders和Freshers 同时存在的情况
      // if(freshers.length > 0 && holders.length > 0){
      //   holders = []
      //   freshers = finalData
      // }



      // let batchSize = batchSizeOfFresher
      // // let batchSize = await dispatch('bulksender/estimateBulksendSizeForFresh',{tokenAddress,addresses, balances}, { root: true })
      //
      // var times = parseInt(Math.ceil(finalData.length/parseFloat(batchSize)));
      // var batches = [];

      var holdersCount = holders.length
      var allData = holders.concat(freshers)
      var addressValues = []
      var batches = []
      let allDataCount = allData.length
      let batchIndex = 0
      let totalGas = 0
      var batchGas = 0
      for(var index = 0;index< allDataCount;index++){
          var item = allData[index]
          addressValues.push(item)

          if(index < holdersCount){
            batchGas += estimateCostPerTransferOfHolder
          }else{
            batchGas += estimateCostPerTransferOfFresher
          }
          if(batchGas >= maxGasUsed || index == allDataCount -1){
            var firstAddress = addressValues[0]['address'];
            var lastAddress = addressValues[addressValues.length - 1]['address'];
            var uniqueId = firstAddress + "_" + lastAddress
            batches.push({
              uniqueId: uniqueId,
              txHash:'',status:-1,
              firstAddress:firstAddress,
              index:batchIndex,
              lastAddress:lastAddress,
              addressValues:addressValues,
              count:addressValues.length,
              estimateGas:batchGas })

            totalGas += batchGas
            batchIndex += 1
            batchGas = 0
            addressValues = []
            continue
          }

      }

      // totalGas = parseInt(totalGas/3)

      totalGas = 60000 * allDataCount

      addressInfoCopy.holders = holders
      addressInfoCopy.freshers = freshers
      addressInfoCopy.batches = batches
      addressInfoCopy.totalGas = totalGas + 0 * batches.length
      addressInfoCopy.times = batches.length

      var timestamp = Date.parse(new Date());
      var random_number = Math.random()*10;
      var taskID = "TASKID_"+ timestamp + "_" + random_number
      addressInfoCopy.taskID = taskID


      commit("SET_ADDRESS_INFO", addressInfoCopy)

      //计算预估费用
      await dispatch('estimateTotalEtherCost')
    }
    return true

  },

  // async saveTasksToLocal({ rootState, state, commit}) {
  //   try{
  //       let tasks = []
  //       if(localStorage.tasks){
  //         tasks = JSON.parse(localStorage.tasks)
  //       }
  //
  //       var isExist = false
  //       var newTaskId = state.addressInfo.taskID
  //       tasks.some((item, index)=>{
  //         if(item.taskID == newTaskId){
  //           isExist = true
  //           return true
  //         }
  //       })
  //       if(!isExist){
  //         tasks.push(state.addressInfo)
  //         localStorage.tasks = JSON.stringify(tasks)
  //       }
  //   }catch(e){
  //     console.info(e)
  //
  //   }
  // },

  // async saveTasksToLocal({ dispatch, rootState, state, commit},{addressInfo}) {
  //   try{
  //     let netStorage = await dispatch('getNetIdStorage', {})
  //     netStorage.tasks = addressInfo
  //     dispatch('updateNetIdStorage', {netStorage})
  //   }catch(e){
  //     console.info(e)
  //   }
  // },

  async saveTxsToLocal({ dispatch, rootState, state, commit},{status, txHash}) {
    try{
      if(txHash.length == 64){
        let netStorage = await dispatch('getNetIdStorage', {})
        let txs = netStorage.txs
        if (txs == undefined || txs == null){
          txs = {}
        }
        txs[txHash] = status
        netStorage.txs = txs
        await dispatch('updateNetIdStorage', {netStorage})
      }

    }catch(e){
      console.info(e)
    }
  },

  async updateTxStatusToLocal({ dispatch, rootState, state, commit},{status, txHash}) {
    try{
      if(txHash.length == 64){
        let netStorage = await dispatch('getNetIdStorage', {})
        let txs = netStorage.txs
        if (txs != undefined && txs != null && txs.hasOwnProperty(txHash)){
          txs[txHash] = status
          netStorage.txs = txs
          await dispatch('updateNetIdStorage', {netStorage})
        }
      }

    }catch(e){
      console.info(e)
    }
  },

  async getLastTxs({ dispatch, rootState, state, commit}) {
    let txs = {}
    try{
      let netStorage = await dispatch('getNetIdStorage', {})
      return netStorage.txs
    }catch(e){
    }
    return txs
  },

  async getDelegater({ dispatch, rootState, state, commit}) {
    let delegater = {}
    try{
      let netStorage = await dispatch('getNetIdStorage', {})
      delegater = netStorage.delegater
      if(delegater == undefined || delegater == null ){
        delegater = {}
      }
    }catch(e){
    }
    return delegater
  },

  async checkDelegater({ dispatch, rootState, state, commit}) {
    try{
      let delegater = await dispatch('getDelegater')
      if (Object.keys(delegater) == 0){
        delegater = await dispatch('bulksender/createBurnKey',{},{ root: true })
        let netStorage = await dispatch('getNetIdStorage', {})
        netStorage.delegater = delegater
        await dispatch('updateNetIdStorage', {netStorage})
      }
      let burnerKey = delegater
      await dispatch('bulksender/saveBurnerKey',{burnerKey},{ root: true })

    }catch(e){
    }
  },

  // async getLastTask({ rootState, state, commit}) {
  //   let task = {}
  //   try{
  //     let netStorage = await dispatch('getNetIdStorage', {})
  //     return netStorage.tasks
  //   }catch(e){
  //   }
  //   return task
  //
  // },

  // async checkLastTasks({ rootState, state, dispatch, commit}) {
  //   let lastTask = await dispatch('getLastTask')
  //   if(lastTask!=undefined && lastTask != null){
  //       var batches = lastTask.batches
  //       if(batches == undefined){
  //         return null
  //       }
  //       let hasUnfinishedTasks = false
  //       batches.some((item, index)=>{
  //       if(item.status == 0){
  //           hasUnfinishedTasks = true
  //           return true
  //         }
  //     })
  //     if(hasUnfinishedTasks){
  //       return lastTask
  //     }
  //   }
  //   return null
  // },

  async clearLocalTxs({ dispatch, rootState, state, commit}) {

    try{
      let netStorage = await dispatch('getNetIdStorage', {})
      netStorage.txs = {}
      //更新delegaters
      if(netStorage.delegater != undefined){
        if(netStorage.usedDelegater != undefined && netStorage.usedDelegater == true){
            let trashDelegaters = netStorage.trashDelegaters
            if(trashDelegaters == undefined){
              trashDelegaters = []
            }
            trashDelegaters.push(netStorage.delegater)
            netStorage.trashDelegaters = trashDelegaters
            netStorage.delegater = {}
            netStorage.usedDelegater = false
        }
      }

      await dispatch('updateNetIdStorage', {netStorage})
    }catch(e){
      // console.info(e)
    }
  },

  async saveUsedDelegater({ dispatch, rootState, state, commit},{usedDelegater}) {
    try{
      let netStorage = await dispatch('getNetIdStorage', {})
      netStorage.usedDelegater = usedDelegater
      await dispatch('updateNetIdStorage', {netStorage})
    }catch(e){
      console.info(e)
    }
  },



  async saveTrc10Tokens({ dispatch, rootState, state, commit},{trc10Tokens}) {
    try{
      let netStorage = await dispatch('getNetIdStorage', {})
      netStorage.trc10Tokens = trc10Tokens
      await dispatch('updateNetIdStorage', {netStorage})
    }catch(e){
      console.info(e)
    }
  },


  async getCachedTrc10Tokens({ dispatch, rootState, state, commit}) {
    let trc10Tokens = []
    try{
      let netStorage = await dispatch('getNetIdStorage', {})
      trc10Tokens = netStorage.trc10Tokens
      if(trc10Tokens == undefined || trc10Tokens == null ){
        trc10Tokens = []
      }
    }catch(e){
    }
    return trc10Tokens
  },

  async checkLastTxs({ rootState, state, dispatch, commit}) {
    let txs = await dispatch('getLastTxs')
    if(txs!=undefined && txs != null){
      let hasUnfinishedTxs = false
      for (var key in txs) {
        if(key.length == 64 && txs[key] == 0){
            hasUnfinishedTxs = true
            break
        }
      }
      if(hasUnfinishedTxs){
        commit('SET_UNFINISHED_TXS',txs)
        return txs
      }else{
        //清空txs
        await dispatch('clearLocalTxs')
        commit('SET_UNFINISHED_TXS',{})
        return {}
      }
    }
    return {}
  },

  async checkContractsError({ state, rootState, commit, rootGetters, dispatch}) {
    const {addressInfo} = rootState.common
    let addressInfoCopy = Object.assign({},addressInfo)
    // var addresses = addressInfoCopy.originalAddressStr;
    // addressInfoCopy.invalidAddressesIndexes.forEach((index) =>{
    //   addresses.splice(index,1)
    // });

    var validData = addressInfoCopy.validData;
    let queryLimit = state.queryLimit
    var queryTimes = parseInt(Math.ceil(validData.length/parseFloat(state.queryLimit)));


    let invalidAddresses = []
    let invalidAddressesIndexes = []
    var validAmountBN = web3.toBigNumber(addressInfo.validAmount);
    var newValidData = []
    for(var index = 0;index< queryTimes;index++){

       var fromIndex = index * queryLimit
       var toIndex = queryLimit *(index+1)
       var queryData = validData.slice(fromIndex, toIndex);
       var addresses = []

       queryData.forEach((item, index)=>{
            addresses.push(item.address)
        });
      let result = await dispatch('token/checkAddressIsContract',{addresses}, { root: true })
      let tokenAddress = "410000000000000000000000000000000000000000"
      // let balances = await dispatch('token/bulkQueryBalances',{tokenAddress,addresses }, { root: true })
      // console.info(balances)

      result.forEach((address, index)=>{
        let item = queryData[index]
        if(address != "0x0000000000000000000000000000000000000000"){
          invalidAddresses.push({index: index,address: item.address, errorType: 3})
          invalidAddressesIndexes.push(index)
          let invalidAddressAmountBN = web3.toBigNumber(item.amount);
          // validData.push({'address':address,'amount':amount, amountStr: amountBN.toString(10)});
          //改一下amount
          validAmountBN = validAmountBN.minus(invalidAddressAmountBN)
        }else{
          newValidData.push(item)
        }
       });
     }

    if(invalidAddressesIndexes.length > 0){
      addressInfoCopy.validData = newValidData
      addressInfoCopy.validAmount = validAmountBN.toNumber()
      addressInfoCopy.invalidAddressesIndexes = invalidAddressesIndexes
      addressInfoCopy.invalidAddresses = invalidAddresses
      commit("SET_ADDRESS_INFO", addressInfoCopy)
      return true
    }
    return false

  },
  async checkInsertAddresses({ rootState, commit, rootGetters}, {addresses}) {
    //如果有正在进行的交易，不应该生效
    var duplicatedAddresses = new Set();
    var duplicatedAddressesIndexes = [];
    var invalidAddresses = new Set();
    var invalidAddressesIndexes = [];
    var nonDuplicatedAmount = web3.toBigNumber(0);
    var validAmount = web3.toBigNumber(0);
    var validData = [];
    var nonDuplicatedData = [];
    var originalData = [];
    var loopedAddresses = [];
    let tronWeb = await rootGetters['metamask/tronWeb']()

    addresses.forEach((item, index) => {

      var addressBalance = item.split(",");
      if (addressBalance.length < 2)
          addressBalance = item.split("，");

      var address = addressBalance[0].replace(/(\n[\s|\t]*\r*\n)/g, '\n').replace(/^\s+|\s+$/gm,'')
      var amount = addressBalance[1];
      var valid = true;
      var duplicated = false;
      let isContract = false;
      // try{
      //   await tronWeb.trx.getContract(address)
      //   isContract = true
      // }catch(e){
      // }
      // console.info("result:",isContract)
      if(!tronWeb.isAddress(address) || isContract || address.toLowerCase() == "0x0000000000000000000000000000000000000000" || isNaN(amount)){
          var errorType = 0
          if(isNaN(amount) || amount == 0 || amount == '0'){
            errorType = 1
            if(!tronWeb.isAddress(address)){
              errorType = 2
            }
          }
          invalidAddresses.add({index: index,address: address, errorType: errorType})
          invalidAddressesIndexes.push(index)
          valid = false;
      }else{
          // address = toChecksumAddress(address);
          var amountBN = web3.toBigNumber(amount);
          amount = amountBN.toNumber()
          validAmount = validAmount.plus(amountBN);
          validData.push({'address':address,'amount':amount, amountStr: amountBN.toString(10)});
          if(loopedAddresses.indexOf(address) == -1){
            loopedAddresses.push(address)
            nonDuplicatedData.push({'address':address,'amount':amount, amountStr: amountBN.toString(10)});
            nonDuplicatedAmount = nonDuplicatedAmount.plus(amountBN);
          }else{
            duplicated = true;
            duplicatedAddresses.add(address);
            duplicatedAddressesIndexes.push(index);
          }
      }

    // if(isNaN(amount)){
    //   amount = 0;
    // }
    let amountStr = amount
    try{
      amountStr =  web3.toBigNumber(amount).toString(10)
    }catch(e){}
    originalData.push({
      address:address,
      amount:amount,
      amountStr: amountStr,
      valid:valid,
      duplicated: duplicated});

    });

    nonDuplicatedAmount = nonDuplicatedAmount.toNumber();
    validAmount = validAmount.toNumber();
    duplicatedAddresses = Array.from(duplicatedAddresses);
    invalidAddresses = Array.from(invalidAddresses);

    var addressInfo = {
      validAmount: validAmount,
      nonDuplicatedAmount: nonDuplicatedAmount,
      originalData: originalData,
      originalAddressStr: addresses,
      duplicatedAddresses: duplicatedAddresses,
      duplicatedAddressesIndexes: duplicatedAddressesIndexes,
      invalidAddresses: invalidAddresses,
      invalidAddressesIndexes: invalidAddressesIndexes,
      validData: validData,
      nonDuplicatedData: nonDuplicatedData,
      finalData: originalData,
      finalAmount: nonDuplicatedAmount,

    }
    commit("SET_ADDRESS_INFO", addressInfo)

  },
  async combineBalances({ rootState, commit, dispatch, state }, {}) {
    var combinedData = [];
    const {addressInfo} = rootState.common
    // let addressInfoCopy = addressInfo.slice()
    let addressInfoCopy = Object.assign({},addressInfo)
    addressInfoCopy.validData.forEach(function (item) {
      if (!this[item.address]) {
          this[item.address] = { address: item.address, amount: web3.toBigNumber(0)};
          combinedData.push(this[item.address]);
      }
      var amountBN = web3.toBigNumber(item.amount);
      var currentAmountBN = web3.toBigNumber(this[item.address].amount);
      this[item.address].amount = currentAmountBN.plus(amountBN).toNumber()
      this[item.address].amountStr = currentAmountBN.plus(amountBN).toString(10)
    }, Object.create(null));


    addressInfoCopy.combinedData = combinedData
    addressInfoCopy.finalData = combinedData
    addressInfoCopy.finalAmount = addressInfo.validAmount
    addressInfoCopy.invalidAddressesIndexes = []
    addressInfoCopy.invalidAddresses = []
    addressInfoCopy.duplicatedAddressesIndexes = []
    addressInfoCopy.duplicatedAddresses = []

    commit("SET_ADDRESS_INFO", addressInfoCopy)

    return true

  },

  async keepFirstOne({ rootState, commit, dispatch, state }, {}) {

    const {addressInfo} = rootState.common
    let addressInfoCopy = Object.assign({},addressInfo)
    addressInfoCopy.finalData = addressInfo.nonDuplicatedData
    addressInfoCopy.finalAmount = addressInfo.nonDuplicatedAmount
    addressInfoCopy.invalidAddressesIndexes = []
    addressInfoCopy.invalidAddresses = []
    addressInfoCopy.duplicatedAddressesIndexes = []
    addressInfoCopy.duplicatedAddresses = []

    commit("SET_ADDRESS_INFO", addressInfoCopy)
    return true

  },

  async deleteInvalidAddresses({ rootState, commit, dispatch, state }, {}) {

    const {addressInfo} = rootState.common
    let addressInfoCopy = Object.assign({},addressInfo)
    // var addresses = addressInfoCopy.originalAddressStr;
    // addressInfoCopy.invalidAddressesIndexes.forEach((index) =>{
    //   addresses.splice(index,1)
    // });

    var validData = addressInfoCopy.validData;
    //如果有重复的再去重新计算索引
    if(addressInfoCopy.duplicatedAddressesIndexes.length > 0){
      var loopedAddresses = []
      var duplicatedAddressesIndexes = []
      validData.forEach((item, index)=>{
        if(loopedAddresses.indexOf(item.address) != -1){
          duplicatedAddressesIndexes.push(index)
        }else{
          loopedAddresses.push(item.address)
        }
      });
      addressInfoCopy.duplicatedAddressesIndexes = duplicatedAddressesIndexes
    }

    addressInfoCopy.finalData = validData
    addressInfoCopy.finalAmount = addressInfo.validAmount
    addressInfoCopy.invalidAddressesIndexes = []
    addressInfoCopy.invalidAddresses = []

    //
    // console.info(addressInfoCopy.invalidAddresses);
    // console.info(addressInfoCopy.invalidAddresses);

    commit("SET_ADDRESS_INFO", addressInfoCopy)

    return true

  },

  async readFileAsync({ rootState, commit, dispatch, state }, {fileData}) {
    let file = fileData
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        var binary = "";
        var bytes = new Uint8Array(reader.result);
        var length = bytes.byteLength;
        for (var i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        /* read workbook */
        var wb = XLSX.read(binary, {type: 'binary'});
        /* grab first sheet */
        var wsname = wb.SheetNames[0];
        var ws = wb.Sheets[wsname];
        /* generate HTML */
        var data = XLSX.utils.sheet_to_csv(ws);
        resolve(data);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    })
  },

  async parseFile({ rootState, commit, dispatch, rootGetters, state }, {fileData}) {
    try{
      let insertedAddress = await dispatch('readFileAsync', {fileData})
      await dispatch('parseInsertAddresses',{insertedAddress})
      return true
    }catch(e){
      console.info(e)
      let result = await dispatch('uploadFile', {fileData})
      return result
    }
  },

  async uploadFile({ rootState, commit, dispatch, rootGetters, state }, {fileData}) {
      const { netId } = rootState.metamask
      try {
          let uploadUrl = "http://127.0.0.1:5000/upload";
          var data = new FormData()
          data.append('file', fileData)
          let request = new Request(uploadUrl, {
            method: 'POST',
            body: data
          });
          const response = await fetch(request);
          if (response.status === 200) {
            const json = await response.json()
            if(json.code == 0 || json.success){
              var addresses = json.data;
              await dispatch('checkInsertAddresses',{addresses})
              // commit("SET_ORIGIN_INPUT_DATA", inputData);
              return true;
            }else{
              throw Error('Upload file failed')
              return false;
            }
          } else {
            throw Error('Upload file failed')
            return false;
          }
      } catch (e) {
        console.error(e)
        return false;
      }
    },

async checkUnfinishedTransactionStatus({ state, getters, rootGetters, rootState, dispatch, commit },{txHash}) {
      const { smartContractShortPollTime} = rootGetters['metamask/networkConfig']
      try{
        console.info(txHash);
        let result = await tronWeb.trx.getTransaction(txHash)
        console.info(result);
        let status = 0
        if (Array.isArray(result.ret)) {
        if (result.ret[0]['contractRet'] == 'SUCCESS') {
            status = 1
        }else{
            status = -2
        }
        await dispatch('updateTxStatusToLocal',{status, txHash})
        await dispatch('checkLastTxs', {})

      }else{
        setTimeout(() => { dispatch('checkUnfinishedTransactionStatus',{txHash})}, smartContractShortPollTime * 1000 )
      }

      }catch (e) {
        console.info('checking error', e)
          setTimeout(() => { dispatch('checkUnfinishedTransactionStatus'),{txHash}}, smartContractShortPollTime * 1000 )
      }
    },

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
