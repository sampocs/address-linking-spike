import { sha256 } from '@cosmjs/crypto';
import { toUtf8 } from '@cosmjs/encoding';
import eccrypto from '@toruslabs/eccrypto';

const private_key = Buffer.from("0b39dbced06015b9f7d2ebb076071cb93fcfaaa093f6a6ff9450efce3b4be4fd", "hex")
const public_key = eccrypto.getPublic(private_key);
const message = "stride17kht2x2ped6qytr2kklevtvmxpw7wq9rmuc3ca"
const message_bz = Buffer.from(sha256(toUtf8(message)))

const signature = await eccrypto.sign(
    private_key,
    message_bz,
);

const verification = await eccrypto
    .verify(public_key, message_bz, signature)
    .then(() => true)
    .catch(() => false)

console.log("Signature:", signature.toString("hex"))
console.log("Verification", verification)