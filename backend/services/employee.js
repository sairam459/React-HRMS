var data =require("../data/db");

module.exports = {
  getAllEmployees: function(req, res) {
    var ret = false;
    if (req.body.role == "manager") {
      ret = data.filter(rec => {
        return rec.managerid === req.body.id;
      });
    }
    // req.body.role === "manager" ? (ret = data) : (ret = false)
    res.send(ret);
  },

  createEmployee: function(req, res) {
    var employee = req.body;
    employee["managerid"] = req.params.id;
    employee['tasks']=[];
    var employees = [...data,employee]
    

    res.json(

      employees.filter(rec => {
        return rec.managerid === req.params.id;
      })
    );
  },

  deleteEmployee: function(req, res) {
    res.json(
      data
        .filter(rec => {
          return rec.managerid === req.params.mid;
        })
        .filter(rec => {
          return rec.id != req.params.eid;
        })
    );
  },

  //update operation is done in ui only
  updateEmployee: function(req, res) {},

  getAnalysisData:function(req,res){
      res.json(data.filter(rec=>{
          return rec.managerid===req.params.id
      }).map(rec2=>{
          return {
              name:rec2.first,
              performance:rec2.performance
          }
      })
    )
  },

  logout:function(req,res){
    res.send(true)
  }

};
