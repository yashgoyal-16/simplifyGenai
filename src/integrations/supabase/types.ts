export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      agent_tools: {
        Row: {
          agent_id: string
          configuration: Json | null
          created_at: string
          id: string
          tool_id: string
          tool_type: string
        }
        Insert: {
          agent_id: string
          configuration?: Json | null
          created_at?: string
          id?: string
          tool_id: string
          tool_type: string
        }
        Update: {
          agent_id?: string
          configuration?: Json | null
          created_at?: string
          id?: string
          tool_id?: string
          tool_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_tools_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "inbound_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      call_reports: {
        Row: {
          agent_id: string | null
          analysis: Json | null
          call_date: string
          call_duration_seconds: number
          call_purpose: string | null
          call_summary: string | null
          call_transcript: string | null
          call_type: string | null
          caller_name: string | null
          caller_phone: string
          campaign_id: string | null
          cost_breakdown: Json | null
          created_at: string
          id: string
          profile_id: string | null
          recording_url: string | null
          stereo_recording_url: string | null
          structured_data: Json | null
          total_cost: number | null
        }
        Insert: {
          agent_id?: string | null
          analysis?: Json | null
          call_date: string
          call_duration_seconds: number
          call_purpose?: string | null
          call_summary?: string | null
          call_transcript?: string | null
          call_type?: string | null
          caller_name?: string | null
          caller_phone: string
          campaign_id?: string | null
          cost_breakdown?: Json | null
          created_at?: string
          id?: string
          profile_id?: string | null
          recording_url?: string | null
          stereo_recording_url?: string | null
          structured_data?: Json | null
          total_cost?: number | null
        }
        Update: {
          agent_id?: string | null
          analysis?: Json | null
          call_date?: string
          call_duration_seconds?: number
          call_purpose?: string | null
          call_summary?: string | null
          call_transcript?: string | null
          call_type?: string | null
          caller_name?: string | null
          caller_phone?: string
          campaign_id?: string | null
          cost_breakdown?: Json | null
          created_at?: string
          id?: string
          profile_id?: string | null
          recording_url?: string | null
          stereo_recording_url?: string | null
          structured_data?: Json | null
          total_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "call_reports_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "outbound_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_reports_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_reports_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          agent_id: string | null
          completed_at: string | null
          created_at: string
          description: string | null
          failed_calls: number
          id: string
          name: string
          status: string
          successful_calls: number
          total_contacts: number
          total_cost: number | null
          total_duration_seconds: number
          updated_at: string
          user_id: string
        }
        Insert: {
          agent_id?: string | null
          completed_at?: string | null
          created_at?: string
          description?: string | null
          failed_calls?: number
          id?: string
          name: string
          status?: string
          successful_calls?: number
          total_contacts?: number
          total_cost?: number | null
          total_duration_seconds?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          agent_id?: string | null
          completed_at?: string | null
          created_at?: string
          description?: string | null
          failed_calls?: number
          id?: string
          name?: string
          status?: string
          successful_calls?: number
          total_contacts?: number
          total_cost?: number | null
          total_duration_seconds?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "outbound_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      carrier_forwarding: {
        Row: {
          carrier: string
          country: string
          created_at: string
          forwarding_code: string
          id: string
          instructions: string | null
        }
        Insert: {
          carrier: string
          country: string
          created_at?: string
          forwarding_code: string
          id?: string
          instructions?: string | null
        }
        Update: {
          carrier?: string
          country?: string
          created_at?: string
          forwarding_code?: string
          id?: string
          instructions?: string | null
        }
        Relationships: []
      }
      contact_lists: {
        Row: {
          contact_count: number
          contacts: Json
          created_at: string | null
          description: string | null
          headers: Json
          id: string
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          contact_count?: number
          contacts?: Json
          created_at?: string | null
          description?: string | null
          headers?: Json
          id?: string
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          contact_count?: number
          contacts?: Json
          created_at?: string | null
          description?: string | null
          headers?: Json
          id?: string
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      data_field_configs: {
        Row: {
          agent_id: string | null
          created_at: string | null
          description: string | null
          id: string
          is_editable: boolean | null
          is_required: boolean | null
          name: string
        }
        Insert: {
          agent_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_editable?: boolean | null
          is_required?: boolean | null
          name: string
        }
        Update: {
          agent_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_editable?: boolean | null
          is_required?: boolean | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "data_field_configs_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "outbound_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      faq_questions: {
        Row: {
          answer: string
          created_at: string
          id: string
          profile_id: string | null
          question: string
          updated_at: string | null
        }
        Insert: {
          answer: string
          created_at?: string
          id?: string
          profile_id?: string | null
          question: string
          updated_at?: string | null
        }
        Update: {
          answer?: string
          created_at?: string
          id?: string
          profile_id?: string | null
          question?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "faq_questions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      inbound_agents: {
        Row: {
          assistant_id: string | null
          business_info: string | null
          calendar_link: string | null
          created_at: string
          faq_data: Json | null
          id: string
          knowledge_base_enabled: boolean | null
          knowledge_base_tool_id: string | null
          name: string
          phone_number: string | null
          sms_after_booking_message: string | null
          sms_booking_enabled: boolean | null
          sms_booking_message: string | null
          sms_tool_id: string | null
          system_prompt: string | null
          transfer_calls_enabled: boolean | null
          transfer_description: string | null
          transfer_phone: string | null
          updated_at: string
          user_id: string
          voice_id: string | null
        }
        Insert: {
          assistant_id?: string | null
          business_info?: string | null
          calendar_link?: string | null
          created_at?: string
          faq_data?: Json | null
          id?: string
          knowledge_base_enabled?: boolean | null
          knowledge_base_tool_id?: string | null
          name: string
          phone_number?: string | null
          sms_after_booking_message?: string | null
          sms_booking_enabled?: boolean | null
          sms_booking_message?: string | null
          sms_tool_id?: string | null
          system_prompt?: string | null
          transfer_calls_enabled?: boolean | null
          transfer_description?: string | null
          transfer_phone?: string | null
          updated_at?: string
          user_id: string
          voice_id?: string | null
        }
        Update: {
          assistant_id?: string | null
          business_info?: string | null
          calendar_link?: string | null
          created_at?: string
          faq_data?: Json | null
          id?: string
          knowledge_base_enabled?: boolean | null
          knowledge_base_tool_id?: string | null
          name?: string
          phone_number?: string | null
          sms_after_booking_message?: string | null
          sms_booking_enabled?: boolean | null
          sms_booking_message?: string | null
          sms_tool_id?: string | null
          system_prompt?: string | null
          transfer_calls_enabled?: boolean | null
          transfer_description?: string | null
          transfer_phone?: string | null
          updated_at?: string
          user_id?: string
          voice_id?: string | null
        }
        Relationships: []
      }
      knowledge_bases: {
        Row: {
          agent_id: string | null
          created_at: string
          description: string | null
          file_ids: Json | null
          id: string
          name: string
          tool_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          agent_id?: string | null
          created_at?: string
          description?: string | null
          file_ids?: Json | null
          id?: string
          name: string
          tool_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          agent_id?: string | null
          created_at?: string
          description?: string | null
          file_ids?: Json | null
          id?: string
          name?: string
          tool_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_bases_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: true
            referencedRelation: "inbound_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      outbound_agents: {
        Row: {
          assistant_id: string | null
          config: Json
          created_at: string | null
          id: string
          name: string
          system_prompt: string | null
          tool_id: string | null
          user_id: string
        }
        Insert: {
          assistant_id?: string | null
          config: Json
          created_at?: string | null
          id?: string
          name: string
          system_prompt?: string | null
          tool_id?: string | null
          user_id: string
        }
        Update: {
          assistant_id?: string | null
          config?: Json
          created_at?: string | null
          id?: string
          name?: string
          system_prompt?: string | null
          tool_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      pending_users: {
        Row: {
          country: string | null
          created_at: string
          email: string
          expires_at: string
          id: string
          name: string
          password_hash: string
          phone: string | null
          verification_token: string
        }
        Insert: {
          country?: string | null
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          name: string
          password_hash: string
          phone?: string | null
          verification_token: string
        }
        Update: {
          country?: string | null
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          name?: string
          password_hash?: string
          phone?: string | null
          verification_token?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          alert_email: string | null
          alert_phone: string | null
          alert_preferences: Json | null
          business_info: string | null
          calendar_link: string | null
          card_validated: boolean | null
          carrier: string | null
          country: string | null
          created_at: string
          device_type: string | null
          email: string | null
          email_to_share: string | null
          fair_use_exceeded: boolean | null
          id: string
          imported_twilio_phone: string | null
          imported_vapi_phone_id: string | null
          inbound_100_notification_sent: string | null
          inbound_80_notification_sent: string | null
          inbound_agent_id: string | null
          inbound_minutes_limit: number | null
          inbound_minutes_used: number | null
          knowledge_base_enabled: boolean | null
          language: string | null
          last_notification_sent: string | null
          last_usage_reset: string | null
          name: string | null
          outbound_100_notification_sent: string | null
          outbound_80_notification_sent: string | null
          phone: string | null
          purpose_name: string | null
          selected_plan: string | null
          skills: Json | null
          sms_after_booking_message: string | null
          sms_booking_enabled: boolean | null
          sms_booking_message: string | null
          sms_when_to_send: string | null
          subscription_plan: string | null
          transfer_calls_enabled: boolean | null
          trial_started_at: string | null
          twilio_number: string | null
          updated_at: string
          vapi_phone_id: string | null
          voice: string | null
        }
        Insert: {
          alert_email?: string | null
          alert_phone?: string | null
          alert_preferences?: Json | null
          business_info?: string | null
          calendar_link?: string | null
          card_validated?: boolean | null
          carrier?: string | null
          country?: string | null
          created_at?: string
          device_type?: string | null
          email?: string | null
          email_to_share?: string | null
          fair_use_exceeded?: boolean | null
          id: string
          imported_twilio_phone?: string | null
          imported_vapi_phone_id?: string | null
          inbound_100_notification_sent?: string | null
          inbound_80_notification_sent?: string | null
          inbound_agent_id?: string | null
          inbound_minutes_limit?: number | null
          inbound_minutes_used?: number | null
          knowledge_base_enabled?: boolean | null
          language?: string | null
          last_notification_sent?: string | null
          last_usage_reset?: string | null
          name?: string | null
          outbound_100_notification_sent?: string | null
          outbound_80_notification_sent?: string | null
          phone?: string | null
          purpose_name?: string | null
          selected_plan?: string | null
          skills?: Json | null
          sms_after_booking_message?: string | null
          sms_booking_enabled?: boolean | null
          sms_booking_message?: string | null
          sms_when_to_send?: string | null
          subscription_plan?: string | null
          transfer_calls_enabled?: boolean | null
          trial_started_at?: string | null
          twilio_number?: string | null
          updated_at?: string
          vapi_phone_id?: string | null
          voice?: string | null
        }
        Update: {
          alert_email?: string | null
          alert_phone?: string | null
          alert_preferences?: Json | null
          business_info?: string | null
          calendar_link?: string | null
          card_validated?: boolean | null
          carrier?: string | null
          country?: string | null
          created_at?: string
          device_type?: string | null
          email?: string | null
          email_to_share?: string | null
          fair_use_exceeded?: boolean | null
          id?: string
          imported_twilio_phone?: string | null
          imported_vapi_phone_id?: string | null
          inbound_100_notification_sent?: string | null
          inbound_80_notification_sent?: string | null
          inbound_agent_id?: string | null
          inbound_minutes_limit?: number | null
          inbound_minutes_used?: number | null
          knowledge_base_enabled?: boolean | null
          language?: string | null
          last_notification_sent?: string | null
          last_usage_reset?: string | null
          name?: string | null
          outbound_100_notification_sent?: string | null
          outbound_80_notification_sent?: string | null
          phone?: string | null
          purpose_name?: string | null
          selected_plan?: string | null
          skills?: Json | null
          sms_after_booking_message?: string | null
          sms_booking_enabled?: boolean | null
          sms_booking_message?: string | null
          sms_when_to_send?: string | null
          subscription_plan?: string | null
          transfer_calls_enabled?: boolean | null
          trial_started_at?: string | null
          twilio_number?: string | null
          updated_at?: string
          vapi_phone_id?: string | null
          voice?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_inbound_agent_id_fkey"
            columns: ["inbound_agent_id"]
            isOneToOne: false
            referencedRelation: "inbound_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      promotion_email_list: {
        Row: {
          email: string
        }
        Insert: {
          email: string
        }
        Update: {
          email?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          trial_end: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          trial_end?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          trial_end?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      top_up_purchases: {
        Row: {
          amount_paid: number
          created_at: string
          expires_at: string
          id: string
          minutes_purchased: number
          price_per_minute: number
          status: string
          stripe_payment_intent_id: string | null
          subscription_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount_paid: number
          created_at?: string
          expires_at: string
          id?: string
          minutes_purchased: number
          price_per_minute?: number
          status?: string
          stripe_payment_intent_id?: string | null
          subscription_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount_paid?: number
          created_at?: string
          expires_at?: string
          id?: string
          minutes_purchased?: number
          price_per_minute?: number
          status?: string
          stripe_payment_intent_id?: string | null
          subscription_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "top_up_purchases_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_tracking: {
        Row: {
          billing_period_end: string
          billing_period_start: string
          created_at: string
          id: string
          inbound_minutes_used: number
          outbound_minutes_included: number
          outbound_minutes_purchased: number
          outbound_minutes_used: number
          subscription_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          billing_period_end: string
          billing_period_start: string
          created_at?: string
          id?: string
          inbound_minutes_used?: number
          outbound_minutes_included?: number
          outbound_minutes_purchased?: number
          outbound_minutes_used?: number
          subscription_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          billing_period_end?: string
          billing_period_start?: string
          created_at?: string
          id?: string
          inbound_minutes_used?: number
          outbound_minutes_included?: number
          outbound_minutes_purchased?: number
          outbound_minutes_used?: number
          subscription_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "usage_tracking_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_inbound_minutes_used: {
        Args: { profile_uuid: string }
        Returns: number
      }
      get_agent_kpi_config: {
        Args: { agent_uuid: string }
        Returns: Json
      }
      get_available_outbound_minutes: {
        Args: { user_uuid: string }
        Returns: number
      }
      get_campaign_stats: {
        Args: { campaign_uuid: string }
        Returns: {
          total_calls: number
          successful_calls: number
          failed_calls: number
          total_duration_seconds: number
          total_cost: number
          avg_call_duration: number
        }[]
      }
      reset_monthly_inbound_usage: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
