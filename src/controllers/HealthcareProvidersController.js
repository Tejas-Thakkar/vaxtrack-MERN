const HealthcareProviders = require("../models/HealthcareProviderModel")

const addHealthcareProviders = async (req, res) => {
    try {
        const savedProviders = await HealthcareProviders.create(req.body)
        res.status(201).json({
            message: "Healthcare provider added successfully",
            data: savedProviders,
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }

}
    const getHealthcareProviders = async (req, res) => {
        try {

            const Providers = await HealthcareProviders.find()
            res.status(201).json({
                message: "All healthcare providers",
                data: Providers,
            })

        } catch (err) {
            res.status(500).json({
                message: err
            })
        }
    }

//     const addHordingWithFile = async (req, res) => {
//   upload(req, res, async (err) => {
//     if (err) {
//       res.status(500).json({
//         message: err.message,
//       });
//     } else {
//       // database data store
//       //cloundinary

//       const cloundinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
//       console.log(cloundinaryResponse);
//       console.log(req.body);

//       //store data in database
//       req.body.hordingURL = cloundinaryResponse.secure_url
//       const savedHording = await hordingModel.create(req.body);

//       res.status(200).json({
//         message: "hording saved successfully",
//         data: savedHording
//       });
//     }
//   });
// };


module.exports = { addHealthcareProviders, getHealthcareProviders,  };

