function submit(e:any){
 e.preventDefault()
 const orderId = Date.now().toString().slice(-6)
 window.location.href = `/success?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}&phone=${encodeURIComponent(form.phone)}&product=${encodeURIComponent(form.product)}`
}