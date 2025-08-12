"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

interface ContactFormProps {
  className?: string
  onSubmit?: (data: FormData) => Promise<void>
}

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      if (onSubmit) {
        await onSubmit(formData)
      }
      setSubmitStatus("success")
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={cn("max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Name Field */}
          <div className="space-y-2">
            <label 
              htmlFor="name" 
              className="block text-sm font-semibold text-white"
            >
              Full Name <span className="text-destructive" aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={cn(
                "input",
                "w-full bg-secondary/50 border-secondary-800 text-white placeholder:text-muted-foreground",
                "focus:border-primary focus:ring-primary",
                errors.name && "border-destructive focus:border-destructive focus:ring-destructive"
              )}
              placeholder="Enter your full name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-sm font-semibold text-white"
            >
              Email Address <span className="text-destructive" aria-label="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={cn(
                "input",
                "w-full bg-secondary/50 border-secondary-800 text-white placeholder:text-muted-foreground",
                "focus:border-primary focus:ring-primary",
                errors.email && "border-destructive focus:border-destructive focus:ring-destructive"
              )}
              placeholder="your.email@company.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company Field */}
        <div className="space-y-2">
          <label 
            htmlFor="company" 
            className="block text-sm font-semibold text-white"
          >
            Company Name <span className="text-muted-foreground">(Optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={cn(
              "input",
              "w-full bg-secondary/50 border-secondary-800 text-white placeholder:text-muted-foreground",
              "focus:border-primary focus:ring-primary"
            )}
            placeholder="Your company name"
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label 
            htmlFor="message" 
            className="block text-sm font-semibold text-white"
          >
            Message <span className="text-destructive" aria-label="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className={cn(
              "input min-h-[120px] resize-none",
              "w-full bg-secondary/50 border-secondary-800 text-white placeholder:text-muted-foreground",
              "focus:border-primary focus:ring-primary",
              errors.message && "border-destructive focus:border-destructive focus:ring-destructive"
            )}
            placeholder="Tell us about your project and AI needs..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-destructive" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-xs text-muted-foreground">
            <span className="text-destructive">*</span> Required fields
          </p>
          
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner mr-2" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div 
            className="p-4 bg-success/10 border border-success/20 rounded-md text-success text-sm"
            role="alert"
            aria-live="polite"
          >
            <strong>Success!</strong> Your message has been sent. We'll get back to you within 24 hours.
          </div>
        )}
        
        {submitStatus === "error" && (
          <div 
            className="p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm"
            role="alert"
            aria-live="polite"
          >
            <strong>Error!</strong> There was a problem sending your message. Please try again.
          </div>
        )}
      </form>
    </div>
  )
}