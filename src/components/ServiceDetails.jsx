import { forwardRef, useEffect } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

export const ServiceDetails = forwardRef(({ isActive, selectedService, setSelectedService, setIsActive }, ref) => {
    
    return (
        <div className={`service-details`} ref={ref}>
            {selectedService && (
                <>
                    <div className="icon-container">{selectedService.icon()}</div>
                    <h3>{selectedService.label}</h3>
                    <FaTimes
                        size={35}
                        onClick={() => {
                            setIsActive(false);
                            setSelectedService(null)
                        }}
                        className="close-button"
                    />
                    <div className="service-content">
                        <h5 className="description">{selectedService.intro}</h5>
                        <ul>
                            {selectedService.allServices?.map((service, index) => (
                                <li key={index}>
                                    <FaCheckCircle
                                        size={20}
                                        className="service-list-icon"
                                    ></FaCheckCircle>
                                    <h6>
                                        {service.title} - <span>{service.description}</span>
                                    </h6>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
});
