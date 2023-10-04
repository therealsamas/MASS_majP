
module.exports.home = async function(req,res){
	try{
		console.log('hitttt');
		return res.status(200).json({
			message:'success'
		});
	}catch(error){
		console.error(error);
	}
} 