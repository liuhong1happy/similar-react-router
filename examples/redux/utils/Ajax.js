const getError = function(options,xhr){
    var  msg = 'cannot '+ options.type + " "+options.url+":"+xhr.status;
    var err = new Error(msg);
    err.status = xhr.status;
    err.method = options.type;
    err.url = options.url;
    return err;
}
const getBody = function(xhr){
    var text = xhr.responseText || xhr.response;
    if(!text){
        return text;
    }
    
    try{
        return JSON.parse(text);
    }catch(e){
        return text;
    }
}
const Ajax = function(options){
	if(typeof XMLHttpRequest === 'undefined'){
		return;
	}
	var xhr = new XMLHttpRequest();
	if(xhr.upload){
		xhr.upload.onprogress = function(e){
			if(e.total>0){
				e.percent = e.loaded / e.total*100;
			}
			options.load(e);
		}
	}
	var formData = new FormData();
	if(options.data){
		if(options.type.toUpperCase()=="GET"){
			 if(options.url.indexOf("?")==-1){
				 options.url += "?";
			 }
			 var params = [];
			 for(var key in options.data){
				 params.push(key+"="+encodeURIComponent(options.data[key]))
			 }
			 options.url += params.join("&");
		}else{
			for(var i in options.data){
				formData.append(i,options.data[i]);
			}
		}
	}
	xhr.onerror = function(e){
		options.error(e);
	}
	xhr.onload = function(e){
		if(xhr.status !== 200){
			return options.error(getError(options,xhr),getBody(xhr));
		}
		options.success(getBody(xhr));
	}
    
	xhr.open(options.type ,options.url, true);
	xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
	if(options.type.toUpperCase()=="GET"){
		xhr.send();
	}else{
		xhr.send(formData);
	}
}

module.exports = function(options){
	  options.url = options.url || "/api/url";
	  options.type = options.type || "get";
	  options.success = options.success || function(e){};
	  options.error = options.error || function(e){};
	  options.load = options.load || function(e){};
	  Ajax(options);
}