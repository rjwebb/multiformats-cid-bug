import {CID} from "multiformats-new"
import {CID as CIDOld} from "multiformats-old"


function func(arg: CID) {
    console.log(arg)
}

const oldCid = CIDOld.parse("zb2rhe5P4gXftAwvA4eXQ5HJwsER2owDyS9sKaQRRVQPn93bA")


func(oldCid)
